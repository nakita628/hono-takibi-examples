import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionModifyTrafficMirrorFilterNetworkServicesRoute,
  postActionModifyTrafficMirrorFilterNetworkServicesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionModifyTrafficMirrorFilterNetworkServicesHandler = app
  .openapi(getActionModifyTrafficMirrorFilterNetworkServicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionModifyTrafficMirrorFilterNetworkServicesRoute, (c) => {
    throw new Error('Not implemented')
  })
