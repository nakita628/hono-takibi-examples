import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteShadowsV2TrackingIdRoute,
  getShadowsV2HealthRoute,
  getShadowsV2TrackingIdRoute,
  getShadowsV2TrackingIdStateRoute,
  getShadowsV2TrackingIdStateSelectorRoute,
  getShadowsV2VersionRoute,
  getShadowsV4Route,
  postShadowsV2BatchRoute,
  putShadowsV2TrackingIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const shadowsHandler = app
  .openapi(postShadowsV2BatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getShadowsV2HealthRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getShadowsV2VersionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteShadowsV2TrackingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getShadowsV2TrackingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putShadowsV2TrackingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getShadowsV2TrackingIdStateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getShadowsV2TrackingIdStateSelectorRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getShadowsV4Route, (c) => {
    throw new Error('Not implemented')
  })
