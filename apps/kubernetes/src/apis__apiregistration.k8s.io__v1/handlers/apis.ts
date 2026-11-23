import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApisApiregistrationK8sIoV1ApiservicesNameRoute,
  deleteApisApiregistrationK8sIoV1ApiservicesRoute,
  getApisApiregistrationK8sIoV1ApiservicesNameRoute,
  getApisApiregistrationK8sIoV1ApiservicesNameStatusRoute,
  getApisApiregistrationK8sIoV1ApiservicesRoute,
  getApisApiregistrationK8sIoV1IndexRoute,
  getApisApiregistrationK8sIoV1WatchApiservicesNameRoute,
  getApisApiregistrationK8sIoV1WatchApiservicesRoute,
  patchApisApiregistrationK8sIoV1ApiservicesNameRoute,
  patchApisApiregistrationK8sIoV1ApiservicesNameStatusRoute,
  postApisApiregistrationK8sIoV1ApiservicesRoute,
  putApisApiregistrationK8sIoV1ApiservicesNameRoute,
  putApisApiregistrationK8sIoV1ApiservicesNameStatusRoute,
} from '../routes'

const app = new OpenAPIHono()

export const apisHandler = app
  .openapi(getApisApiregistrationK8sIoV1IndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApisApiregistrationK8sIoV1ApiservicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApisApiregistrationK8sIoV1ApiservicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApisApiregistrationK8sIoV1ApiservicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApisApiregistrationK8sIoV1ApiservicesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApisApiregistrationK8sIoV1ApiservicesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApisApiregistrationK8sIoV1ApiservicesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApisApiregistrationK8sIoV1ApiservicesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApisApiregistrationK8sIoV1ApiservicesNameStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApisApiregistrationK8sIoV1ApiservicesNameStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApisApiregistrationK8sIoV1ApiservicesNameStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApisApiregistrationK8sIoV1WatchApiservicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApisApiregistrationK8sIoV1WatchApiservicesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
