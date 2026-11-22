import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getWalletobjectsV1FlightObjectResourceIdRoute,
  getWalletobjectsV1FlightObjectRoute,
  patchWalletobjectsV1FlightObjectResourceIdRoute,
  postWalletobjectsV1FlightObjectResourceIdAddMessageRoute,
  postWalletobjectsV1FlightObjectRoute,
  putWalletobjectsV1FlightObjectResourceIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const flightobjectHandler = app
  .openapi(getWalletobjectsV1FlightObjectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWalletobjectsV1FlightObjectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWalletobjectsV1FlightObjectResourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchWalletobjectsV1FlightObjectResourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putWalletobjectsV1FlightObjectResourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWalletobjectsV1FlightObjectResourceIdAddMessageRoute, (c) => {
    throw new Error('Not implemented')
  })
