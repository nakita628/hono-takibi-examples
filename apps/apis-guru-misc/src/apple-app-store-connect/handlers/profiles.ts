import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1ProfilesIdRoute,
  getV1ProfilesIdBundleIdRoute,
  getV1ProfilesIdCertificatesRoute,
  getV1ProfilesIdDevicesRoute,
  getV1ProfilesIdRoute,
  getV1ProfilesRoute,
  postV1ProfilesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const profilesHandler = app
  .openapi(getV1ProfilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProfilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ProfilesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProfilesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProfilesIdBundleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProfilesIdCertificatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProfilesIdDevicesRoute, (c) => {
    throw new Error('Not implemented')
  })
