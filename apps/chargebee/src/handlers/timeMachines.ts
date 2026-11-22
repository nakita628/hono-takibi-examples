import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getTimeMachinesTimeMachineNameRoute,
  postTimeMachinesTimeMachineNameStartAfreshRoute,
  postTimeMachinesTimeMachineNameTravelForwardRoute,
} from '../routes'

const app = new OpenAPIHono()

export const timeMachinesHandler = app
  .openapi(getTimeMachinesTimeMachineNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTimeMachinesTimeMachineNameTravelForwardRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTimeMachinesTimeMachineNameStartAfreshRoute, (c) => {
    throw new Error('Not implemented')
  })
