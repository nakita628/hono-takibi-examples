import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1CommandsIdVariablesRoute,
  getV1CommandsRoute,
  patchV1CommandsIdVariablesRoute,
  postV1CommandsCancelreservationRoute,
  postV1CommandsRemotestartRoute,
  postV1CommandsRemotestopRoute,
  postV1CommandsReserveRoute,
  postV1CommandsResetRoute,
  postV1CommandsUnlockconnectorRoute,
} from '../routes'

const app = new OpenAPIHono()

export const commandsHandler = app
  .openapi(getV1CommandsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1CommandsCancelreservationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1CommandsRemotestartRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1CommandsRemotestopRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1CommandsReserveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1CommandsResetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1CommandsUnlockconnectorRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1CommandsIdVariablesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1CommandsIdVariablesRoute, (c) => {
    throw new Error('Not implemented')
  })
