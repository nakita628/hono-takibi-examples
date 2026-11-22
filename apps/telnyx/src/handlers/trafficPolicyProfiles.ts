import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteTrafficPolicyProfilesId2Route,
  deleteTrafficPolicyProfilesIdRoute,
  getTrafficPolicyProfiles2Route,
  getTrafficPolicyProfilesId2Route,
  getTrafficPolicyProfilesIdRoute,
  getTrafficPolicyProfilesRoute,
  getTrafficPolicyProfilesServices2Route,
  getTrafficPolicyProfilesServicesRoute,
  patchTrafficPolicyProfilesId2Route,
  patchTrafficPolicyProfilesIdRoute,
  postTrafficPolicyProfiles2Route,
  postTrafficPolicyProfilesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const trafficPolicyProfilesHandler = app
  .openapi(getTrafficPolicyProfilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTrafficPolicyProfilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTrafficPolicyProfilesServicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteTrafficPolicyProfilesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTrafficPolicyProfilesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchTrafficPolicyProfilesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTrafficPolicyProfiles2Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTrafficPolicyProfiles2Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTrafficPolicyProfilesServices2Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteTrafficPolicyProfilesId2Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTrafficPolicyProfilesId2Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchTrafficPolicyProfilesId2Route, (c) => {
    throw new Error('Not implemented')
  })
