import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postAccount1PushuriRoute,
  postAccount2VerifyRoute,
  postOauth21PullDoctypeRoute,
  postOauth21PullIssuersRoute,
  postOauth21PullParametersRoute,
  postStatistics1CountsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const digiLockerMetaAPIsHandler = app
  .openapi(postAccount1PushuriRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccount2VerifyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOauth21PullDoctypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOauth21PullIssuersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOauth21PullParametersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postStatistics1CountsRoute, (c) => {
    throw new Error('Not implemented')
  })
