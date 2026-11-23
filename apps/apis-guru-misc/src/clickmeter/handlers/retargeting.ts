import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteRetargetingIdRoute,
  getRetargetingCountRoute,
  getRetargetingIdDatapointsCountRoute,
  getRetargetingIdDatapointsRoute,
  getRetargetingIdRoute,
  getRetargetingRoute,
  postRetargetingIdRoute,
  postRetargetingRoute,
} from '../routes'

const app = new OpenAPIHono()

export const retargetingHandler = app
  .openapi(getRetargetingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRetargetingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRetargetingCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRetargetingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRetargetingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRetargetingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRetargetingIdDatapointsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRetargetingIdDatapointsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
