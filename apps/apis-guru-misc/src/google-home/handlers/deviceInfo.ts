import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getEurekaInfoRoute,
  getOfferRoute,
  getSupportedLocalesRoute,
  getSupportedTimezonesRoute,
  postAssistantCheckReadyStatusRoute,
  postGetAppDeviceIdRoute,
  postTestInternetDownloadSpeedRoute,
} from '../routes'

const app = new OpenAPIHono()

export const deviceInfoHandler = app
  .openapi(postAssistantCheckReadyStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEurekaInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGetAppDeviceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOfferRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSupportedLocalesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSupportedTimezonesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTestInternetDownloadSpeedRoute, (c) => {
    throw new Error('Not implemented')
  })
