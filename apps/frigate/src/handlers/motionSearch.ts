import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getCameraNameSearchMotionJobIdRoute,
  postCameraNameSearchMotionJobIdCancelRoute,
  postCameraNameSearchMotionRoute,
} from '../routes'

const app = new OpenAPIHono()

export const motionSearchHandler = app
  .openapi(postCameraNameSearchMotionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCameraNameSearchMotionJobIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCameraNameSearchMotionJobIdCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
