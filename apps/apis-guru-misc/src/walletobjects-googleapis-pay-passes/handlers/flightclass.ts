import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getWalletobjectsV1FlightClassResourceIdRoute,
  getWalletobjectsV1FlightClassRoute,
  patchWalletobjectsV1FlightClassResourceIdRoute,
  postWalletobjectsV1FlightClassResourceIdAddMessageRoute,
  postWalletobjectsV1FlightClassRoute,
  putWalletobjectsV1FlightClassResourceIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const flightclassHandler = app
  .openapi(getWalletobjectsV1FlightClassRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWalletobjectsV1FlightClassRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWalletobjectsV1FlightClassResourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchWalletobjectsV1FlightClassResourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putWalletobjectsV1FlightClassResourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWalletobjectsV1FlightClassResourceIdAddMessageRoute, (c) => {
    throw new Error('Not implemented')
  })
