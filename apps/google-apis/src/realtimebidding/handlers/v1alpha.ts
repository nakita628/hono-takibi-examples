import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1alphaParentBiddingFunctionsRoute,
  postV1alphaNameActivateRoute,
  postV1alphaNameArchiveRoute,
  postV1alphaParentBiddingFunctionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const v1alphaHandler = app
  .openapi(postV1alphaNameActivateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1alphaNameArchiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1alphaParentBiddingFunctionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1alphaParentBiddingFunctionsRoute, (c) => {
    throw new Error('Not implemented')
  })
