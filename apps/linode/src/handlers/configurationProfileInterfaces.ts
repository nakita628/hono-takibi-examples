import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiVersionLinodeInstancesLinodeIdConfigsConfigIdInterfacesInterfaceIdRoute,
  getApiVersionLinodeInstancesLinodeIdConfigsConfigIdInterfacesInterfaceIdRoute,
  getApiVersionLinodeInstancesLinodeIdConfigsConfigIdInterfacesRoute,
  postApiVersionLinodeInstancesLinodeIdConfigsConfigIdInterfacesOrderRoute,
  postApiVersionLinodeInstancesLinodeIdConfigsConfigIdInterfacesRoute,
  putApiVersionLinodeInstancesLinodeIdConfigsConfigIdInterfacesInterfaceIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const configurationProfileInterfacesHandler = app
  .openapi(postApiVersionLinodeInstancesLinodeIdConfigsConfigIdInterfacesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionLinodeInstancesLinodeIdConfigsConfigIdInterfacesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiVersionLinodeInstancesLinodeIdConfigsConfigIdInterfacesOrderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionLinodeInstancesLinodeIdConfigsConfigIdInterfacesInterfaceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiVersionLinodeInstancesLinodeIdConfigsConfigIdInterfacesInterfaceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteApiVersionLinodeInstancesLinodeIdConfigsConfigIdInterfacesInterfaceIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
